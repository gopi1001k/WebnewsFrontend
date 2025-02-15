import {useEffect, useState} from "react";

function Card(){
    const [filter,setFilter]=useState("All")
    const [articles,setArticles]=useState([])
    const [filteredArticles, setFilteredArticles] = useState([]);
    const[searchId,setSearchId]=useState("");
    const [searchKeyword,setSearchKeyword]=useState("");

useEffect(() => {
    fetch('http://127.0.0.1:5000/articles')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setArticles(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

    // useEffect(()=>{
    //     if(filter==="All"){
    //         setFilteredArticles(articles);
    //     }
    //     else if (filter === "By Id") {
    //         setFilteredArticles(articles.filter(article => article.ID));
    //     }
    //     else if(filter ==="By Keyword"){
    //         setFilteredArticles(articles.filter(articles=> articles.Title.toLowerCase().includes("sports")))
    //     }
    // },[filter,articles])

    useEffect(() => {
        let updatedArticles = articles;

        if (filter === "By Id" && searchId) {
            updatedArticles = updatedArticles.filter(article => article.ID === parseInt(searchId));
        }

        if (filter === "By Keyword" && searchKeyword) {
            updatedArticles = updatedArticles.filter(article =>
                article.Title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                article.Category.toLowerCase().includes(searchKeyword.toLowerCase())
            );
        }
        setFilteredArticles(updatedArticles);
    }, [filter,articles,searchId,searchKeyword]);


    const handleFilter=((e)=>{
        setFilter(e.target.value);
    })
    const handleSearchId=(e)=>{
        setSearchId(e.target.value)
    }
    const handleSearchKeyword=(e)=>{
        setSearchKeyword(e.target.value)
    }

    return (
        <div className=' ml-4 py-2 mt-4'>
            <h2 className='text-xl mb-1'>Select Filter</h2>
            <select className='text-xl border-4 ' onChange={handleFilter} value={filter}>
                <option value="All">All Articles</option>
                <option value="By Id">Article by ID</option>
                <option value="By Keyword">Article by Keyword</option>
            </select>

            {filter === 'By Id' && (
                <div className='mt-4'>
                    <input
                        type="number"
                        placeholder='Enter Article Id'
                        value={searchId}
                        onChange={handleSearchId}
                        className='border-4 p-2'
                    />
                </div>
            )}
            {filter === 'By Keyword' && (
                <div className='mt-4 '>
                    <input
                        type="text"
                        placeholder='Enter Keyword'
                        value={searchKeyword}
                        onChange={handleSearchKeyword}
                        className='border-4 p-2'
                    />
                </div>
            )}

            <div className="grid grid-cols-3 gap-2 mt-4 ">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <div key={article.ID} className=" border-4 border-gray-600 p-4 rounded-lg flex flex-col h-full">
                            <p><strong>ID:</strong> {article.ID}</p>
                            <h3 className="text-lg "><strong>Title:</strong> {article.Title}</h3>
                            <p><strong>Summary:</strong> {article.Summary}</p>
                            <p><strong>Category:</strong> {article.Category}</p>
                            <p><strong>Published Date:</strong> {article['Published Date']}</p>
                            <p><strong>Source:</strong> {article.Source}</p>
                            <a href={article.URL} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
                        </div>
                    ))
                ) : (
                    <p>No articles found.</p>
                )}
            </div>
        </div>
    )
}
export default Card
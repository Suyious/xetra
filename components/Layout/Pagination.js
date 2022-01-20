import {useEffect, useState} from "react"
import Link from "next/link"
import { useRouter } from "next/router";

const Pagination = ({loading, numOfItems, itemsPerPage}) => {

    const router = useRouter();
    const currentPage = parseInt(router.query.page) || 1
    const {pathname} = router;
    const numOfPages = Math.ceil(numOfItems/itemsPerPage);
    const [pages, setPages] = useState([]);
    useEffect(()=>{
        // const temp = [];
        // for(let i=1;i<=numOfPages;i++){
        //     temp.push(i);
        // }
        // setPages(temp);
        setPages(Array.from({length: numOfPages}, (_, i) => i + 1))
    },[numOfPages])

    return (
        <div className="Pagination_body">
            {currentPage!== 1 && <Link href={`${pathname}?page=${currentPage - 1}`}>
                <a className="Pagination_button Pagination_button_previous">Prev</a>
            </Link>}
            <div className="Pagination_pages">
                {loading? 
                    Array(5).fill(<div className="Pagination_page loading"/>)
                : pages.map(page=>(
                    <Link key={page} href={`${pathname}?page=${page}`}>
                        <a className={`Pagination_page ${page===currentPage && "selected"}`}>{page}</a>
                    </Link>
                ))}
            </div>
            {currentPage!==numOfPages && <Link href={`${pathname}?page=${currentPage + 1}`}>
                <a className="Pagination_button Pagination_button_next">Next</a>
            </Link>}
            <style jsx>{`
                .Pagination_body{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1em;
                    gap: 1em;
                    max-width: 90vw;
                    margin: 0 auto;
                }
                .Pagination_pages{
                    display: flex;
                    gap: 0.1em;
                    flex-wrap: wrap;
                }
                .Pagination_page{
                    width: 1.5em;
                    height: 2.2em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: all 200ms ease-in;
                    margin-right: 0.3em;
                }
                .Pagination_page:hover{
                    background: rgba(155, 155, 155, 0.322);
                }
                .Pagination_page.selected{
                    background: white;
                    color: black;
                    border-radius: 1px;
                }
                .Pagination_page.loading{
                    background: #171717;
                    border-radius: 4px;
                }
                .Pagination_button{
                    padding: 0.5em 2em;
                    cursor: pointer;
                    border-radius: 4px;
                    transition: all 200ms ease-in;
                }
                .Pagination_button:hover{
                    background: rgba(155, 155, 155, 0.322);
                }
            `}</style>
        </div>
    )
}

export default Pagination

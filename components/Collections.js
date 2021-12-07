import styles from "../styles/Collections.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCollections } from "../redux/actions/collectionAction";

const Collections = () => {

    const dispatch = useDispatch();
    const {loading, error, collections} = useSelector(state=>state.collection);

    useEffect(()=>{
        dispatch(getCollections());
    },[dispatch])

    return (
        <div className={styles.Collections}>
            {loading?
            <div>Loading...</div>
            : error?
            <div>Error Occured: {error.message}</div>
            :<div className={styles.Collections_wrapper}>
                <div className={styles.Collections_twotoone}>
                    {collections && collections.map((collection, i)=>(<div key={i} className={styles.Collections_card}>{collection.name}</div>))}
                    {collections && collections.map((collection, i)=>(<div key={i} className={styles.Collections_card}>{collection.name}</div>))}
                </div>
            </div>}
        </div>
    )
}

export default Collections

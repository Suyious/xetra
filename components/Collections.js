import styles from "../styles/Collections.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCollections } from "../redux/actions/collectionAction";
import Image from "next/image";
import CollectionCard from "./product/CollectionCard";

const Collections = () => {
  const dispatch = useDispatch();
  const { loading, error, collections } = useSelector(
    (state) => state.collection
  );

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  return (
    <div className={styles.Collections}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error Occured: {error.message}</div>
      ) : (
        <div className={styles.Collections_wrapper}>
          <div>
            <CollectionCard src="/sample002.jpg" size={1} />
          </div>
          <div>
            <CollectionCard src="/sample001.jpg" size={3} />
          </div>
          <div>
            <CollectionCard src="/sample001.jpg" size={3} />
          </div>
          <div>
            <CollectionCard src="/sample002.jpg" size={1} />
          </div>
          <div>
            <CollectionCard src="/sample002.jpg" size={1} />
          </div>
          <div>
            <CollectionCard src="/sample002.jpg" size={1} />
          </div>
          <div>
            <CollectionCard src="/sample002.jpg" size={1} />
          </div>
          <div>
            <CollectionCard src="/sample002.jpg" size={1} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;

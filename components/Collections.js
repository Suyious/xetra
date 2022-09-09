import styles from "../styles/Collections.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCollections } from "../redux/actions/collectionAction";
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
          <CollectionCard src="/sample001.jpg" size={3} />
          <CollectionCard src="/sample001.jpg" size={2} />
          <CollectionCard src="/sample001.jpg" size={1} />
          <CollectionCard src="/sample001.jpg" size={4} />
        </div>
      )}
    </div>
  );
};

export default Collections;

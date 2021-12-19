import styles from "../styles/Collections.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCollections } from "../redux/actions/collectionAction";

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
          <div className={styles.Collections_twotoone}>
            {collections &&
              collections.map((collection, i) => (
                <Link key={i} href={`/collection/${encodeURIComponent(collection._id)}`}>
                  <a><div className={styles.Collections_card}>
                    {collection.name}
                  </div></a>
                </Link>
              ))}
            {collections &&
              collections.map((collection, i) => (
                <Link key={i} href={`/collection/[collection_id]?collection_id=${collection._id}`} as={`collection/${collection._id}`}>
                  <a><div className={styles.Collections_card}>
                    {collection.name}
                  </div></a>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;

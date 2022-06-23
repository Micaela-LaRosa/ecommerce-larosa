import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import useItem from './useItem';

export default function ItemDetailContainer() {
  const {id} = useParams();
  const { isLoading, item} = useItem(id);

  return (
    <div>
        {isLoading ? <h4>LOADING...</h4> : <ItemDetail product={item} />}
    </div>
  );
}
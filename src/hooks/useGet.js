import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useGet = (selector, actionCreator) => {
  const state = useSelector(selector);
  const dispatch = useDispatch();
  // const loaded = useRef(false);

  useEffect(() => {
    if (state.length === 0) {
      dispatch(actionCreator());
      console.log('state updated');
    }
  }, [state]);

  return [state];
};

export default useGet;

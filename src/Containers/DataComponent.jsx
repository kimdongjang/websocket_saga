import React, { useState, useEffect, createContext, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { SOCKET_START } from '../redux/actions/SocketAction';
import Products from './Products';

export default function DataComponent() {
    const productDatas = useSelector((state) => state.SocketReducer.ListenData);
    const dispatch = useDispatch();
    // const getProductDatas = useCallback(() => {
    //     dispatch(getUsersPromise()); // redux-promise 방법
    // }, [dispatch]);
    // const products = useSelector(state => state.users);


    const [tradingDatas, setTradingDatas] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectProduct, setSelectProduct] = useState({
        id: 0,
        name: 100,
        max_price: 10,
    })
    const [selectPrice, setSelectPrice] = useState({
        productId: 0,
        price: 100,
        quantity: 10,
    })



    // 해당 컴포넌트가 생성될 때의 이벤트
    useEffect(() => {
        // 전체 상품/호가 가져오기 위한 웹소켓 시작
        dispatch(SOCKET_START());

        // redux get api 호출
        //getProductDatas();
        
    }, []);
    
    /**
     *  상품 리스트 클릭 콜백
     * @param {*} data 
     */
    function ProductListCallback(data) {
        console.log(data);
        setSelectProduct(data);
        // selectProduct.price = data.price;
    }
    

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!productDatas) return null;
    // console.log(tradingDatas);

    return (
        <div className='home'>
            <div className='area__function'>
                <div className='area__product__list'>
                    <Products productDatas={productDatas} ProductListCallback={ProductListCallback} />
                </div>              
            </div>
        </div>
    )
}

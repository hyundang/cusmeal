import style from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {changePrice} from '../../modules/PriceChange';
import {useEffect, useState} from 'react';

const Wrap = style.div`
    position: fixed;
    bottom: 0vw;
    width: 100vw;
    height: 20vw; 
    background-color: rgba(248, 246, 250, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0vw 1vw 7vw 0 rgba(0, 0, 0, 0.3);
`;

const Btn = style.button`
    width: 90vw;
    height: 13vw; 
    background-color: rgba(48, 119, 86, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3vw;
    outline: none;
    border: none;
`;

const TextWrap = style.div`
    display: flex;
    flex-direction: row;
`;

const Text = style.div`
    font-size: 1.2rem;
    font-weight: 900;
    color: rgba(249, 210, 86, 1);
    margin-left: 2vw;
`

const TextPrice = style.div`
    font-size: 1.2rem;
    font-weight: 900;
    color: rgba(249, 210, 86, 1);
`;



const PriceComponent = ({posts}) => {
    
    return(
        <>
            <Wrap>
                <Btn>
                    <TextWrap>
                        {
                            //<TextPrice>{price}원</TextPrice>
                        }    
                        <Text>주문하기</Text>
                    </TextWrap>
                </Btn>
            </Wrap>
        </>
    )
}

export default PriceComponent;
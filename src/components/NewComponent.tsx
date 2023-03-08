import React, {useState} from "react";
import {FilterType, MoneyItemType} from "../App";

type NewComponentPropsType = {
    money: Array<MoneyItemType>
    onClickFilterHandler: (name: FilterType) => void
}

const NewComponent: React.FC<NewComponentPropsType> = (props) => {

    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr) => {
                    return (
                        <li key={objFromMoneyArr.number}>
                            <span>{objFromMoneyArr.banknote} </span>
                            <span>{objFromMoneyArr.nominal} </span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler('all')}>all</button>
            <button onClick={() => props.onClickFilterHandler('rubles')}>rubles</button>
            <button onClick={() => props.onClickFilterHandler('dollars')}>dollars</button>
        </>
    );


}

export default NewComponent
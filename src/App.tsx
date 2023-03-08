import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import NewComponent from "./components/NewComponent";

export type MoneyItemType = {
    banknote: string
    nominal: number
    number: string
};

type TopCarType = {
    manufacturer: string
    model: string
}

export type FilterType = 'all' | 'rubles' | 'dollars';

function App(): any {

    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    const [filter, setFilter] = useState('all');

    let currentMoney = money;

    if (filter === 'dollars') {
        currentMoney = money.filter(item => item.banknote === 'dollar');
    }
    if (filter === 'rubles') {
        currentMoney = money.filter(item => item.banknote === 'ruble');
    }

    const onClickFilterHandler = (name: FilterType) => {
        setFilter(name);
    }

    const topCars: Array<TopCarType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }

    const Button3Foo = () => {
        console.log('(((');
    }

    return (
        <div className="App">

            <NewComponent money={currentMoney} onClickFilterHandler={onClickFilterHandler}/>

            <table>
                <thead>

                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                </thead>
                <tbody>
                {topCars.map((item: TopCarType, index: number) => {
                    return (
                        <tr key={index}>
                            <td>{item.manufacturer}</td>
                            <td>{item.model}</td>
                        </tr>
                    );
                })}
                </tbody>

            </table>


            <Button name={'Кнопка 1'} callBack={() => Button1Foo('1111', 312)}/>
            <Button name={'Кнопка 2'} callBack={() => Button2Foo('2222')}/>
            <Button name={'Кнопка 3'} callBack={() => Button3Foo()}/>
        </div>
    );
}

export default App;

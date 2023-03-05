import React from 'react';
import logo from './logo.svg';
import './App.css';

type TopCarType = {
    manufacturer: string
    model: string
}

function App(): any {

    const topCars: Array<TopCarType> = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
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

        </div>
    );
}

export default App;

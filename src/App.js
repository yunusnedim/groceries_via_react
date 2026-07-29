import React, {useState} from 'react';

function SearchBar() {
    return (
        <form>
            <input
                type='search'
                placeholder='Search...'
                id='site-search' //What does this ID do?
            ></input>
            <br />
            <input
                type='checkbox'
                id='stocked'
                name='stocked'
                value='stocked'
            ></input>
            <label htmlFor='stocked'>Only show products in stock</label>
        </form>
    );
}

function ProductTable(props) {
    const rows = [];
    let mostRecentCategory = null;

    props.products.forEach((product) => {
        if (product.category !== mostRecentCategory) {
            mostRecentCategory = product.category;
            rows.push(<ProductCategoryRow category={product.category} />);
        }
        rows.push(<ProductRow product={product} />);
    });

    return (
        <div>
            <div>{rows}</div>
        </div>
    );
}

function ProductCategoryRow(props) {
    return <h2>{props.category}</h2>;
}

function ProductRow(props) {
    // return <h3>{props.product.name}</h3>;
    return (
        <div>
            {props.product.name}
            {props.product.price}
        </div>
    );
}

function FilterableProductTable(props) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={props.products} />
        </div>
    );
}

export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}

const PRODUCTS = [
    {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
    {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'},
    {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
    {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
    {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
    {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'},
];

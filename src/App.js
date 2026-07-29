import React, {useState} from 'react';

function SearchBar() {
    return (
        <div>
            <input
                type='search'
                placeholder='Search...'
                id='site-search'
            ></input>
            <button type='submit'>Search</button>
        </div>
    );
}

function ProductTable(props) {
    return (
        <div>
            <div>
                <ProductCategoryRow />
                <ProductRow />
                <ProductRow />
            </div>

            <div>
                <ProductCategoryRow />
                <ProductRow />
                <ProductRow />
            </div>
        </div>
    );
}

function ProductCategoryRow() {
    return <h2>ProductCategoryRow</h2>;
}

function ProductRow(props) {
    return <h3>ProductRow</h3>;
    // return (
    //     <div>
    //         {props.product.name}
    //         {props.product.isInStock ? null : (
    //             <span style={{color: 'red'}}> (Out of Stock)</span>
    //         )}
    //         {props.product.price.toFixed(2)}
    //     </div>
    // );
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

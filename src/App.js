import React, {useState} from 'react';

function SearchBar(props) {
    return (
        <form>
            <input
                type='search'
                text='text'
                placeholder='Search...'
                id='site-search' //What does this ID do?
                value={props.filterText}
                onChange={(e) => props.onFilterTextChange(e.target.value)}
            ></input>
            <br />
            <input
                type='checkbox'
                id='stocked'
                name='stocked'
                value='stocked'
                checked={props.inStockOnly}
                onChange={(e) => props.onInStockOnlyChange(e.target.checked)}
            ></input>
            <label htmlFor='stocked'>Only show products in stock</label>
        </form>
    );
}

function ProductTable(props) {
    const rows = [];
    let mostRecentCategory = null;

    props.products.forEach((product) => {
        if (
            product.name
                .toLowerCase()
                .indexOf(props.filterText.toLowerCase()) === -1
        ) {
            return;
        }

        if (product.category !== mostRecentCategory) {
            mostRecentCategory = product.category;
            rows.push(<ProductCategoryRow category={product.category} />);
        }
        if (!product.stocked && props.inStockOnly) {
            return; // skips iteration cuz inside forEach, not the entire function
        } else {
            rows.push(<ProductRow product={product} />);
        }
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function ProductCategoryRow(props) {
    // return <h2>{props.category}</h2>;
    return (
        <tr>
            {/* header spanning 2 columns */}
            <th colSpan='2'>{props.category}</th>
        </tr>
    );
}

function ProductRow(props) {
    const name = props.product.stocked ? (
        props.product.name
    ) : (
        <span style={{color: 'red'}}>{props.product.name} (Out of stock)</span>
    );
    return (
        <tr>
            <td>{name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
}

function FilterableProductTable(props) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable
                products={props.products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
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

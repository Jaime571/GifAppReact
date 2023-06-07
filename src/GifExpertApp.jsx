import { useState } from 'react';

import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Transformers']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;


        setCategories([newCategory, ...categories]);
    };

    console.log(categories);

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            
            {categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category }/>
                ))
            }
        </>
    );
}

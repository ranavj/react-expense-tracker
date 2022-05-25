import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../fetures/category/Category";
import { loadCategory, selectCategory } from "../fetures/category/categorySlice";

export function CategoryContainer(){
    const getCategory = useSelector(selectCategory);
    // console.log(getCategory);
    // const dispatch = useDispatch();
    // const loadData = () => {
    //     dispatch(loadCategory())
    // };    
    // useEffect(loadData, []);
    return (
        <div>
            {
                getCategory &&  getCategory.map((item, index) => {
                    return <Category key={index} data={item}  />
                })
            }
        </div>
    )
}
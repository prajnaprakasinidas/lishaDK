import React, {useState} from "react";
import Loader from "./loader";

const UseLoader = () => {
    const [loading, setLoading] = useState(false)

    return [
        loading ? <Loader /> : null,
        () => setLoading(true),
        () => setLoading(false)
    ];
};

export default UseLoader;
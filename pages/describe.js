import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Describe( props ) {

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch('/api/describe')
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
        });
    }, []);
    
    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
    
    return (
        <React.Fragment>
            {data.generated_text}
        </React.Fragment>
    )
}
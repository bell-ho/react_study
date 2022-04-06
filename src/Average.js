import React, {useCallback, useMemo, useRef, useState} from 'react';

const getAverage = (numbers) => {
    console.log('cal')
    if (numbers.length === 0) return 0;
    return numbers.reduce((a, b) => a + b) / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputE1 = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputE1.current.focus();
    }, [number, list]); // number나 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onInsert();
        }
    };

    return (
        <div>
            <input onKeyPress={handleKeyPress} value={number} onChange={onChange} ref={inputE1}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                    list.map((value, i) => (
                        <li key={i}>{value}</li>
                    ))
                }
            </ul>
            <div>
                <b>평균값:</b>{avg}
            </div>
        </div>
    );
};

export default Average;

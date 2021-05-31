import { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { flex } from '@/styles/theme';

export default function Main() {
    const [userName, setUserName] = useState('');

    const handleUserName = (e) => {
        const { value } = e.target;
        setUserName(value);
    };

    return (
        <div css={searchBox}>
            <label htmlFor="input">유저 아이디 : </label>
            <input
                id="input"
                type="text"
                value={userName}
                onChange={handleUserName} //*
            />
            <div css={searchButton}>
                <Link href={`/user/${userName}`}>
                    <a>검색</a>
                </Link>
            </div>
        </div>
    );
}

const searchBox = css`
    ${flex(null, 'center')}

    input {
        border: 1px solid black;
        padding: 6px 8px;
        display: inline-block;
        margin-left: 10px;
    }
`;

const searchButton = css`
    margin-left: 10px;
    height: 100%;
    border: 1px solid;
    padding: 6px 8px;
    box-sizing: border-box;
`;

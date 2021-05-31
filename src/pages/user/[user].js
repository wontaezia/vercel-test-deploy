import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/react';
import Followers from '@/components/Followers';
import Head from '@/components/Head';

export default function User({ user }) {
    const [followers, setFollowers] = useState([]);

    const getFollowers = async () => {
        const { data } = await axios.get(user.followers_url);
        setFollowers(data);
    };

    useEffect(() => {
        if (user) {
            console.log(user);
            getFollowers();
        }
    }, []);

    if (!user) {
        return (
            <>
                <p>해당 유저를 찾을 수 없습니다.</p>
                <Link href="/">
                    <a>돌아가기</a>
                </Link>
            </>
        );
    }

    return (
        <>
            <Head title={user.login} desc={user.login + "'s github"} />
            <div>
                <a css={userInfoBox} href={user.html_url} target="_blank">
                    <Image
                        width={30}
                        height={30}
                        src={user.avatar_url}
                        alt="user avatar" //*
                    />
                    <div css={userInfoText}>
                        <span>{user.login}</span>
                        <span>{user.company}</span>
                    </div>
                </a>
            </div>
            {followers.length ? <Followers followers={followers} /> : <div />}
        </>
    );
}

// getServerSideProps는 해당 페이지의 쿼리 객체를 인자로 가진다.
export const getServerSideProps = async ({ query }) => {
    // 이 페이지의 파일명은 [user].js 이므로 쿼리 객체는 {user: "쿼리 인자명"}
    const { user } = query;

    try {
        const res = await axios.get(`${process.env.GITHUB_API}/${user}`);
        if (res.status === 200) {
            const user = res.data;
            return {
                props: { user },
            };
        }
    } catch (err) {
        console.log(err);
        return {
            props: {},
        };
    }
};

const userInfoBox = css`
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 10px;
    margin-bottom: 20px;
    max-width: 200px;
    border: 1px solid;

    img {
        border-radius: 50%;
    }

    span {
        margin-left: 10px;
    }
`;

const userInfoText = css`
    display: flex;
    flex-direction: column;

    span + span {
        margin-top: 2px;
        font-size: 10px;
        color: #aaa;
    }
`;

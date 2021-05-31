import Image from 'next/image';
import { css } from '@emotion/react';

export default function Followers({ followers }) {
    return (
        <div css={container}>
            <h3>Followers</h3>
            <ul css={followerList}>
                {followers.map(({ id, login, company, avatar_url: avatar, html_url: link }) => (
                    <li key={id}>
                        <a href={link} target="_blank">
                            <Image
                                src={avatar}
                                alt="follower user avatar"
                                width={30}
                                height={30} //*
                            />
                            <div>
                                <span>{login}</span>
                                <span>{company}</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const container = css`
    h3 {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 6px;
    }

    a {
        border: 1px solid;
        max-width: 200px;
    }

    li + li a {
        margin-top: 10px;
    }
`;

const followerList = css`
    font-size: 14px;

    li a {
        display: flex;
        align-items: center;
        padding: 10px;
    }

    img {
        border-radius: 50%;
    }

    span {
        margin-left: 10px;
    }
`;

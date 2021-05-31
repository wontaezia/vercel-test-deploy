import { css } from '@emotion/react';
import { flex } from '@/styles/theme';

export default function Error() {
    return (
        <div css={container}>
            <span css={errorCode}>404</span>
            <span css={space}>/</span>
            <span>This page could not be found.</span>
        </div>
    );
}

const container = css`
    ${flex('center', 'center')}
    width: 100%;
    height: 100vh;
`;

const errorCode = css`
    font-weight: bold;
`;

const space = css`
    margin: 0 10px;
`;

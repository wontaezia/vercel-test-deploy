import Link from 'next/link';
import { css } from '@emotion/react';

export default function staticPage({ time }) {
    return (
        <div>
            <Link href="/">
                <a>HOME</a>
            </Link>
            <div css={buildTime}>build: {time}</div>
        </div>
    );
}

export const getStaticProps = async () => {
    /*
     *  개발 단계에서는 getServerSideProps와 동일하게
     *  페이지 요청 때마다 매번 실행되기 때문에 정확한 테스트를 위해서는
     *  production mode로 접근하셔야 확인할 수 있습니다.
     *
     *  $ yarn build && yarn start
     */

    // 10초마다 **새로고침 시** 시간이 갱신됩니다.
    // revalidate를 제거하면 빌드한 시점을 맞막으로 업데이트되지 않습니다.
    // return { props: { time: new Date().toLocaleString() }, revalidate: 10 };
    return { props: { time: new Date().toLocaleString() } };
};

const buildTime = css`
    color: red;
`;

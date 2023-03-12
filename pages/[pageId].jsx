import { Canvas, getPage } from "@raber/react";

function Post({ pageId, data }) {
    // 使用获取到的 post 数据渲染页面
    return (
        <div>
            <Canvas data={data} id={pageId}></Canvas>
        </div>
    );
}

export default Post;

export async function getServerSideProps({ params }) {
    // 从数据库中获取指定文章 ID 的文章内容
    const { pageId } = params;
    const data = await getPage(pageId);
    // 返回文章数据
    return { props: { pageId, data } };
}
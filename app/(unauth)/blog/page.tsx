import { Header } from '@components/Header';
import { client } from 'app/service/apiClient';
import { NameServiceApi } from '~/model/Enum/NameServiceApi';
import { BlogContainer } from '~/view/blogs/BlogContainer';

export default async function Blog() {
    const { contents } = await client.getList({
        endpoint: NameServiceApi.PROJECT
    });

    return (
        <>
            <Header />
            <BlogContainer blogs={contents ?? []} />
        </>
    );
}

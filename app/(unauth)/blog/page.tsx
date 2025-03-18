import { Header } from '@components/Header';
import { client } from 'app/service/apiClient';

export default async function Blog() {
    const {contents} = await  client.getList({ endpoint: 'blogs' });

    console.log(contents);
    
    return (
        <>
            <Header />
            <h1>Blog</h1>

            {contents.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>

                    <div dangerouslySetInnerHTML={{ __html: item.content.editor }}></div>
                </div>
            ))}
        </>
    );
}

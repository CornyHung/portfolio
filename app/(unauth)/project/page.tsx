import { Header } from '@components/Header';
import { client } from 'app/service/apiClient';
import { NameServiceApi } from '~/model/Enum/NameServiceApi';
import { ProjectContainer } from '~/view/projects/ProjectContainer';

export default async function Project() {
    const { contents } = await client.getList({
        endpoint: NameServiceApi.PROJECT
    });

    return (
        <>
            <Header />
            <ProjectContainer projects={contents ?? []} />
        </>
    );
}

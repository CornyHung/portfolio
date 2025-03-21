import { Header } from '@components/Header';
import { client } from 'app/service/apiClient';
import { NameServiceApi } from '~/model/Enum/NameServiceApi';
import ProjectModel from '~/model/ProjectModel';
import { ProjectContainer } from '~/view/projects/ProjectContainer';

export default async function Project() {
    const { contents } = await client.getList({
        endpoint: NameServiceApi.PROJECT
    });

    const dataMapper: Record<string, ProjectModel[]> = Object.groupBy(
        contents,
        ({ category }) => category.title
    );

    return (
        <>
            <Header />
            <ProjectContainer data={dataMapper} />
        </>
    );
}

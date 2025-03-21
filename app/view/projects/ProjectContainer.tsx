import Image from 'next/image';
import ProjectModel from '~/model/ProjectModel';
import '~/view/editor.css';
interface ProjectContainerProps {
    data: Record<string, ProjectModel[]>;
}
export const ProjectContainer: React.FC<ProjectContainerProps> = ({ data }) => {
    return (
        <div className="w-full m-auto md:w-[80%] mt-10 px-5 md:px-48">
            {Object.entries(data).map(([category, projects]) => (
                <div key={category} className='full-line-container relative'>
                    <h2 className='mb-4 text-2xl font-bold category-title'>{category} ({projects.length})</h2>
                    {projects.length > 0 ? (
                        projects.map((item) => (
                            <div
                                className="flex flex-col cursor-pointer justify-between w-full max-w-screen hover:scale-105 duration-300 items-center md:flex-row rounded-[20px] border-[#E0E0E0] border p-[25px] mb-5 md:mb-11 bg-white"
                                key={item.id}
                            >
                                <Image
                                    className="max-w-[30%] max-h-[129px]"
                                    src={item.image?.url}
                                    width={item.image?.width}
                                    height={item.image?.height}
                                    alt={item.title}
                                />
                                <div className="flex flex-col gap-4 max-w-[63%]">
                                    <h2 className="text-3xl font-bold">
                                        {item.title}
                                    </h2>
                                    <p className="p-2 rounded-2xl bg-[#142850] w-auto text-white font-bold text-center max-w-[200px]">
                                        {item.timeLine}
                                    </p>
                                    <p>{item.summary}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Project not found</div>
                    )}
                </div>
            ))}
        </div>
    );
};

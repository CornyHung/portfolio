import Image from 'next/image';
import BlogModel from '~/model/BlogModel';
// import '~/view/editor.css';
interface BlogContainerProps {
    blogs: BlogModel[];
}
export const BlogContainer: React.FC<BlogContainerProps> = ({ blogs }) => {
    return (
        <>
            {blogs.length > 0 ? (
                blogs.map((item) => (
                    <div
                        className="flex flex-col justify-between items-center md:flex-row rounded-[20px] border-[#E0E0E0] border"
                        key={item.id}
                    >
                        <Image
                            src={item.image?.url}
                            width={item.image?.width}
                            height={item.image?.height}
                            alt={item.title}
                        />
                        <div className="flex-col gap-4">
                            <h2>{item.title}</h2>
                            <p>{item.summary}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div>Blog not found</div>
            )}
        </>
    );
};

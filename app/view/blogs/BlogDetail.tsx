import React, { FC } from 'react';
import BlogModel from '~/model/BlogModel';

interface Props {
    blog: BlogModel;
}
export const BlogDetail: FC<Props> = ({ blog }) => {
    return (
        <>
            <div key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.summary}</p>
            </div>
            <div className="Editor">
                <div
                    dangerouslySetInnerHTML={{
                        __html: blog.content.editor
                    }}
                ></div>
            </div>
        </>
    );
};

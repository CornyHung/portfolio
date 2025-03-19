export interface Image {
    url: string;
    width: number | null;
    height: number | null;
}

export interface EditorModel {
    editor: string;
}

export interface Category {
    title: string;
    hidden: boolean | false;
}
export default interface BaseModel {
    id: string;
    title: string;
    image: Image | null;
    category: Category | null;
    summary: string | null;
    content: EditorModel | null;
}

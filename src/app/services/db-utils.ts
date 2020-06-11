import { Course } from '../model/course';


export function converSnaps<T>(snaps){
    return <T[]> snaps.map( snap => {
        return {
            id: snap.payload.doc.id,
            ...snap.payload.doc.data() as {}
        };
    });
}
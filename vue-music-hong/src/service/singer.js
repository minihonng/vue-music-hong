import {get } from './base'

export function getSingerList() {
    return get('/api/getSingerList')
}

export function getAlbum(album) {
    return get('/api/getAlbum', {
        id: album.id
    })
}
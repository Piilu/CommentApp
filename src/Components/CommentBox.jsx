import Container from '@mui/material/Container'
import React from 'react'
import Paper from '@mui/material/Paper'

function CommentBox(props) {
    const {item} = props;
    return (
        <Paper style={{
            padding: 8,
        }} elevation={3} >
            <h2 style={{marginBottom:"0"}}>{item.title}</h2>
            <small>{item.smallTitle}</small>
            {/* 10.11.22-15.11.22 */}
            
            <div style={{maxHeight:"40vh",overflow:"auto"}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsa magnam qui similique error voluptas voluptates soluta pariatur laudantium ab, id ex fugit, dolorem aliquid sunt sequi nobis quam fuga.</p>
            </div>

        </Paper>
    )
}

export default CommentBox
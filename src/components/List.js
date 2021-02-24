import React, { Component } from 'react';
import Image from './Image';

 class List extends Component {
    render() {
        return (
            <div>
                <ol>
                    <li> Satu <Image linkGambar='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' /> </li>
                    <li> Dua <Image linkGambar='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' /> </li>
                    <li> Tiga <Image linkGambar='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' /> </li>
                    <li> Empat <Image linkGambar='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' /> </li> 
                </ol>
            </div>
        )
    }
}

export default List;

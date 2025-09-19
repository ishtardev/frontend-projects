## Website Preview
<p align="center">
<img src="image.png" width="300"/>
</p>

## Notes 

- to get a **blurred background** add this to your css file
```CSS
body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
    backdrop-filter: blur(3px);
}
```
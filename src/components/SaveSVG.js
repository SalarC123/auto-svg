import toImg from 'react-svg-to-image'

function SaveSVG({svg}) {

    function downloadSVG() {
        toImg(svg, 'svg', {
            scale: 1,
            format: 'png',
            quality: 0.92,
            download: true,
            ignore: '.ignored'
          })
    }

    return (
        // <a href="#" onClick={downloadSVG}>Download</a>
        <h1></h1>
    )
}

export default SaveSVG;
import React from 'react'

export default function ElementSelector({type = 'div' ,src, children , className , id ,onClick = ()=>{} , dsi , style}) {
  switch (type) {
      case 'span':
        return <span style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className} >{children}</span>
      case 'h1':
        return <h1 style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</h1>
      case 'h2':
        return <h2 style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</h2>
      case 'h3':
        return <h3 style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</h3>
      case 'h4':
        return <h4 style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</h4>
      case 'h5':
        return <h5 style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</h5>
      case 'h6':
        return <h6 style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</h6>
      case 'section':
        return <section style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</section>
      case 'blockquote':
        return <blockquote data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</blockquote>
      case 'dd':
        return <dd data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</dd>
      case 'dt':
        return <dt data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</dt>
      case 'dl':
        return <dl data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</dl>
      case 'hr':
        return <hr data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</hr>
      case 'li':
        return <li data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</li>
      case 'ol':
        return <ol data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</ol>
      case 'p':
        return <p style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</p>
      case 'i':
        return <p style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</p>
      case 'ul':
        return <ul data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</ul>
      case 'a':
        return <a data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</a>
      case '<button':
        return <button style={style} data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</button>
      case 'datalist':
        return <datalist data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</datalist>
      case 'form':
        return <form data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</form>
      case 'input':
        return <input data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</input>
      case 'label':
        return <label data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</label>
      case 'option':
        return <option data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</option>
      case 'select':
        return <select data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</select>
      case 'textarea':
        return <textarea data-shell-id={dsi} onClick={onClick} id={id} className={className}>{children}</textarea>
      case 'img':
        return <img data-shell-id={dsi} src={src} onClick={onClick} id={id} className={className} />
      case 'video':
        return <video data-shell-id={dsi} src={src} onClick={onClick} id={id} className={className} />
      case 'audio':
        return <audio data-shell-id={dsi} src={src} onClick={onClick} id={id} className={className} />
      case 'none':
          return <React.Fragment>{children}</React.Fragment>
      default:
        return <div data-shell-id={dsi} style={style} onClick={onClick} id={id} className={className}>{children}</div>
  }
}

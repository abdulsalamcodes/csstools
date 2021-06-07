import React from 'react'
import CodeShowcase from './CodeShowcase/CodeShowcase'
import Controllers from './Controllers/Controllers'
import Definition from './Definition/Definition'
import Preview from './Preview/Preview'
import './Shadow.css'
function Shadow() {
    return (
        <div className="Shadow">
            <div className="Shadow_content">
                <Definition />
                <Preview />
                <CodeShowcase />
            </div>
            <Controllers />
        </div>
    )
}

export default Shadow

import React from "react";
import {
    ReactOriginal,
    NextjsOriginal,
    TailwindcssPlain,
    JavascriptOriginal,
    MaterialuiOriginal,
    NodejsOriginal,
    ExpressOriginal,
    MysqlOriginal,
    MongodbOriginal,
    JavaOriginal,
    KotlinOriginal,
    COriginal,
    PythonOriginal,
    PhpOriginal,
    GithubOriginal,
    GitOriginal,
    FigmaOriginal,
    TypescriptOriginal
} from "devicons-react";

function SkillCardBlock({ icon, name }) {
    let IconComponent = null;
    switch (icon) {
        case "ReactOriginal": IconComponent = ReactOriginal; break;
        case "NextjsOriginal": IconComponent = NextjsOriginal; break;
        case "TailwindcssPlain": IconComponent = TailwindcssPlain; break;
        case "JavascriptOriginal": IconComponent = JavascriptOriginal; break;
        case "MaterialuiOriginal": IconComponent = MaterialuiOriginal; break;
        case "NodejsOriginal": IconComponent = NodejsOriginal; break;
        case "ExpressOriginal": IconComponent = ExpressOriginal; break;
        case "MysqlOriginal": IconComponent = MysqlOriginal; break;
        case "MongodbOriginal": IconComponent = MongodbOriginal; break;
        case "JavaOriginal": IconComponent = JavaOriginal; break;
        case "KotlinOriginal": IconComponent = KotlinOriginal; break;
        case "PythonOriginal": IconComponent = PythonOriginal; break;
        case "PhpOriginal": IconComponent = PhpOriginal; break;
        case "COriginal": IconComponent = COriginal; break;
        case "GithubOriginal": IconComponent = GithubOriginal; break;
        case "GitOriginal": IconComponent = GitOriginal; break;
        case "FigmaOriginal": IconComponent = FigmaOriginal; break;
        case "TypescriptOriginal": IconComponent = TypescriptOriginal; break;
        default: break;
    }

    return (
        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group">
            {IconComponent && (
                <IconComponent className="scale-125 group-hover:scale-150 transition-transform duration-300" />
            )}
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{name}</span>
        </div>
    );
}

export default SkillCardBlock;

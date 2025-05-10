export function sum(a: number, b: number){
    return a + b
}

export function getRandom(){
    return Math.random()
}

/*
    关于配置：
        首先是安装vitest并配置测试指令，接下来——
        如果你已经在使用 Vite，请在 Vite 配置中添加 test 属性。你还需要使用 三斜杠指令 在你的配置文件的顶部引用。
        vite.config.ts

        /// <reference types="vitest" />
        import { defineConfig } from 'vite'

        export default defineConfig({
            test: {
                // ...
            },
        })

    关于覆盖率：
        vitest默认使用v8作为覆盖率测试工具，首先需要安装 @vitest/coverage-v8
        然后配置覆盖率测试指令 "coverage": "vitest run --coverage"

        % Coverage report from v8
        ----------|---------|----------|---------|---------|-------------------
        File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
        ----------|---------|----------|---------|---------|-------------------
        All files |     100 |      100 |     100 |     100 | 
        sum.ts    |     100 |      100 |     100 |     100 | 
        ----------|---------|----------|---------|---------|-------------------

        作为逆天的前端工业产线，它们自然有ui界面，只需安装
            npm i -D @vitest/ui
        即可使用ui工具查看测试覆盖率
*/
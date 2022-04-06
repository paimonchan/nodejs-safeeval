import vm from 'vm2'

/** @todo: put builtin variable in here */
const _BUILTINS = {
    console             : console,

}

class SafeEval {
    constructor(safeMode: boolean = true) {
        vm.module(safeMode)
    }

    compile = (code: string) => {
        eval(code)
    }
}

const safeEval = new SafeEval()
safeEval.compile("console.log('test eval')")

export default SafeEval
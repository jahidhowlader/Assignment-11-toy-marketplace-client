import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Castle Disney`
    }, [title])
}

export default useTitle
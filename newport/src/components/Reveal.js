import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect } from "react"
import { useRef } from "react"

export const Reveal = (props) => {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: false })

    const mainControl = useAnimation()

    useEffect(() => {
        isInView && mainControl.start("visible")
    }, [isInView, mainControl])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.5, delay: props.delay }}
            >
                {props.children}
            </motion.div>
        </div>
    )
}
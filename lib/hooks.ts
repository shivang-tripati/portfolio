import { useInView } from "framer-motion";
import { useEffect, RefObject } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from '@/lib/type'

type Ref = RefObject<Element>;

export function useSectionInView(ref: Ref, SectionName: SectionName, amount = 0.75) {
    const  inView = useInView(ref, {amount});

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(SectionName);
        }
    }, [inView, SectionName, setActiveSection, timeOfLastClick]);

}

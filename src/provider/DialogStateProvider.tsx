import { createContext, ReactNode, useState } from "react";


export const DialogStateContext = createContext<any>(undefined);

const DialogStateProvider = ({ children }: { children: ReactNode }) => {
    const [updateProDialog, setUpdateProDialog] = useState("close");

    const contextValues = {
        updateProDialog,
        setUpdateProDialog
    }
    return <DialogStateContext.Provider value={contextValues}>
        {children}
    </DialogStateContext.Provider>
}

export default DialogStateProvider
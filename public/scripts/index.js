
// event subscribed by Verify Enclave
window.addEventListener("message", (event) => {
    const attestationId = event.data
    const origin = event.origin
    if (!attestationId) return
    if (attestationId.length !== 64) return
    fetch(`${window.location.protocol}//${window.location.host}/attestation`, {
        method: "POST",
        body: JSON.stringify({ attestationId, origin }),
        headers: new Headers({ 'content-type': 'application/json' })
    })
})
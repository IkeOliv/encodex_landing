<template>
    <div class="fixed bottom-6 right-6 z-[9999] font-sans">

    <!-- ══════════════════════════════
    FLOATING BUTTON
    ══════════════════════════════ -->
        <Transition name="fab">
            <button v-if="!isOpen" @click="openChat"
                :class="['relative flex items-center gap-2.5 bg-gradient-to-br from-[#0a0f1e] to-[#1e3a5f] text-slate-100 border border-primary-500/30 rounded-full px-5 py-3.5 cursor-pointer shadow-[0_8px_32px_rgba(0,102,204,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,102,204,0.6)] hover:border-primary-500/60 text-sm font-semibold whitespace-nowrap', { 'fab-pulse': !hasInteracted }]"
                aria-label="Abrir chat de soporte">
                <span
                    class="w-8 h-8 bg-gradient-to-br from-[#0066cc] to-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                </span>
                <span class="hidden sm:inline">¿Necesitas ayuda?</span>
                <span v-if="unreadCount > 0"
                    class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-[#0a0f1e]">
                    {{ unreadCount }}
                </span>
            </button>
        </Transition>

    <!-- ══════════════════════════════
        CHAT WINDOW
    ══════════════════════════════ -->
        <Transition name="chat-window">
            <div v-if="isOpen"
                class="w-[380px] max-sm:w-[calc(100vw-32px)] bg-[#111827] border border-white/[0.08] rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
                <!-- HEADER -->
                <div @click="toggleMinimize"
                    class="bg-gradient-to-br from-[#0a0f1e] to-[#1e3a5f] px-5 py-4 flex items-center justify-between cursor-pointer border-b border-white/[0.08] flex-shrink-0">
                    <div class="flex items-center gap-3">
                        <div
                            class="relative w-[42px] h-[42px] bg-gradient-to-br from-[#0066cc] to-primary-500 rounded-full flex items-center justify-center font-bold text-lg text-white flex-shrink-0">
                            Z
                            <span
                                class="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0a0f1e]"></span>
                        </div>
                        <div>
                            <span class="block text-[15px] font-bold text-slate-100 leading-tight">Zarco</span>
                            <span class="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                                <span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                Agente Virtual · Encodex
                            </span>
                        </div>
                    </div>
                    <div class="flex gap-1">
                        <button @click.stop="toggleMinimize"
                            class="w-8 h-8 bg-white/[0.06] border-none rounded-lg text-slate-400 flex items-center justify-center transition-all hover:bg-white/[0.12] hover:text-slate-100"
                            :aria-label="isMinimized ? 'Expandir' : 'Minimizar'">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5">
                                <path v-if="!isMinimized" d="M19 9l-7 7-7-7" />
                                <path v-else d="M5 15l7-7 7 7" />
                            </svg>
                        </button>
                        <button @click.stop="closeChat"
                            class="w-8 h-8 bg-white/[0.06] border-none rounded-lg text-slate-400 flex items-center justify-center transition-all hover:bg-red-500/20 hover:text-red-400"
                            aria-label="Cerrar chat">
                            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- MESSAGES -->
                <div v-if="!isMinimized" ref="messagesContainer"
                    class="flex-1 overflow-y-auto p-5 flex flex-col gap-3 min-h-[300px] max-h-[420px] chat-scrollbar">
                    <!-- Welcome Banner -->
                    <div v-if="messages.length === 0 && !isLoading"
                        class="flex flex-col items-center text-center gap-2.5 py-5 px-2.5">
                        <div class="w-14 h-14 mb-1">
                            <svg viewBox="0 0 40 40" fill="none">
                                <rect width="40" height="40" rx="10" fill="url(#grad)" />
                                <path d="M12 20l5 5 11-10" stroke="white" stroke-width="2.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="grad" x1="0" y1="0" x2="40" y2="40">
                                        <stop offset="0%" stop-color="#00d4ff" />
                                        <stop offset="100%" stop-color="#0066cc" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <h3 class="text-slate-100 text-lg font-bold m-0">¡Hola! Soy Zarco 👋</h3>
                        <p class="text-slate-400 text-[13px] leading-relaxed m-0 max-w-[260px]">
                            Asistente virtual de <strong class="text-primary-500">Encodex</strong>. Estoy aquí para
                            ayudarte con tus necesidades de TI.
                        </p>
                        <button @click="sendQuickStart"
                            class="mt-2 bg-gradient-to-r from-[#0066cc] to-primary-500 text-white border-none rounded-full px-6 py-2.5 text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,212,255,0.4)]">
                            Comenzar conversación →
                        </button>
                    </div>

                    <!-- Messages List -->
                    <TransitionGroup name="message" tag="div" class="flex flex-col gap-3">
                        <div v-for="msg in messages" :key="msg.id"
                            :class="['flex items-end gap-2', msg.role === 'user' ? 'flex-row-reverse' : '']">
                            <div v-if="msg.role === 'assistant'"
                                class="w-7 h-7 bg-gradient-to-br from-[#0066cc] to-primary-500 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mb-[18px]">
                                Z
                            </div>
                            <div :class="[
                                'max-w-[78%] rounded-[18px] px-3.5 py-2.5',
                                msg.role === 'assistant'
                                    ? 'bg-[#1a2236] border border-white/[0.08] rounded-bl-[4px]'
                                    : 'bg-gradient-to-br from-[#0066cc] to-primary-500 rounded-br-[4px]'
                            ]">
                                <p class="m-0 text-[13.5px] leading-[1.55] text-slate-100 break-words"
                                    v-html="formatMessage(msg.content)"></p>
                                <span class="block text-[10px] text-slate-400 mt-1 text-right opacity-70">{{
                                    formatTime(msg.timestamp) }}</span>
                            </div>
                        </div>
                    </TransitionGroup>

                    <!-- Typing Indicator -->
                    <Transition name="typing">
                        <div v-if="isLoading" class="flex items-center gap-2">
                            <div
                                class="w-7 h-7 bg-gradient-to-br from-[#0066cc] to-primary-500 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                                Z</div>
                            <div
                                class="bg-[#1a2236] border border-white/[0.08] rounded-[18px] rounded-bl-[4px] px-4 py-3 flex gap-1 items-center">
                                <span class="typing-dot"></span>
                                <span class="typing-dot" style="animation-delay:.2s"></span>
                                <span class="typing-dot" style="animation-delay:.4s"></span>
                            </div>
                        </div>
                    </Transition>
                </div>

                <!-- INPUT FOOTER -->
                <div v-if="!isMinimized"
                    class="px-4 pb-3.5 pt-3 border-t border-white/[0.08] bg-[#0a0f1e] flex-shrink-0">
                    <div
                        class="flex items-end gap-2 bg-[#1a2236] border border-white/[0.08] rounded-xl pl-3.5 pr-2 py-2 transition-all focus-within:border-primary-500/40 focus-within:shadow-[0_0_0_3px_rgba(0,212,255,0.05)]">
                        <textarea ref="inputRef" v-model="inputText" @keydown.enter.exact.prevent="sendMessage"
                            @input="autoResize" placeholder="Escribe tu mensaje..." rows="1" :disabled="isLoading"
                            maxlength="500"
                            class="flex-1 bg-transparent border-none outline-none text-slate-100 text-[13.5px] leading-relaxed resize-none font-sans max-h-[120px] overflow-y-auto placeholder:text-slate-400/60 disabled:opacity-50"></textarea>
                        <button @click="sendMessage" :disabled="!inputText.trim() || isLoading"
                            class="w-9 h-9 bg-gradient-to-br from-[#0066cc] to-primary-500 border-none rounded-lg text-white flex items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,212,255,0.4)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                            aria-label="Enviar mensaje">
                            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2.5">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

// ============================================================
// CONFIGURACIÓN
// ============================================================
const N8N_WEBHOOK_URL = 'https://n8n.encodex.com.mx/webhook/a29f5d15-71ea-4fbe-83bb-bfbec2dc73b2/chat'
const SESSION_STORAGE_KEY = 'encodex_chat_session'
// ============================================================

const isOpen = ref(false)
const isMinimized = ref(false)
const isLoading = ref(false)
const inputText = ref('')
const messages = ref([])
const unreadCount = ref(1)
const hasInteracted = ref(false)
const messagesContainer = ref(null)
const inputRef = ref(null)
const sessionId = ref('')

onMounted(() => setSessionId())

function openChat() {
    isOpen.value = true
    isMinimized.value = false
    unreadCount.value = 0
    hasInteracted.value = true
    nextTick(() => inputRef.value?.focus())
}

function setSessionId(){
    let stored = sessionStorage.getItem(SESSION_STORAGE_KEY)
    if (!stored) {
        stored = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        sessionStorage.setItem(SESSION_STORAGE_KEY, stored)
    }
    sessionId.value = stored
}

function closeChat() { 
    isOpen.value = false;
    messages.value = [];
    setSessionId();
}

function toggleMinimize() {
    isMinimized.value = !isMinimized.value
    if (!isMinimized.value) nextTick(() => { scrollToBottom(); inputRef.value?.focus() })
}

async function sendQuickStart() {
    inputText.value = 'Hola, necesito información sobre los servicios de Encodex'
    await sendMessage()
}

async function sendMessage() {
    const text = inputText.value.trim()
    if (!text || isLoading.value) return

    messages.value.push({ id: Date.now(), role: 'user', content: text, timestamp: new Date() })
    inputText.value = ''
    resetTextareaHeight()
    isLoading.value = true
    await nextTick()
    scrollToBottom()

    try {
        const res = await fetch(N8N_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chatInput: text, sessionId: sessionId.value, action: 'sendMessage' })
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        const reply = data.output || data.text || data.message || data.choices?.[0]?.message?.content || 'Un momento, por favor.'
        messages.value.push({ id: Date.now() + 1, role: 'assistant', content: reply, timestamp: new Date() })
    } catch (e) {
        console.error('Chat error:', e)
        messages.value.push({
            id: Date.now() + 1, role: 'assistant',
            content: 'Lo siento, hubo un problema. Contáctanos en <a href="https://encodex.com.mx" target="_blank" class="text-primary-500 underline">encodex.com.mx</a>',
            timestamp: new Date()
        })
    } finally {
        isLoading.value = false
        await nextTick()
        scrollToBottom()
        inputRef.value?.focus()
    }
}

function scrollToBottom() {
    messagesContainer.value?.scrollTo({ top: messagesContainer.value.scrollHeight, behavior: 'smooth' })
}
function autoResize(e) {
    const el = e.target; el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 120) + 'px'
}
function resetTextareaHeight() { if (inputRef.value) inputRef.value.style.height = 'auto' }
function formatMessage(content) {
    if (!content) return ''
    return content
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>')
        .replace(/(http?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener" class="text-primary-500 underline">$1</a>')
}
function formatTime(date) {
    return new Intl.DateTimeFormat('es-MX', { hour: '2-digit', minute: '2-digit' }).format(date)
}
</script>

<style scoped>
/* Solo animaciones y cosas que Tailwind no puede hacer */

.typing-dot {
    width: 7px;
    height: 7px;
    background: #00d4ff;
    border-radius: 50%;
    animation: typing-bounce 1.2s infinite;
    opacity: 0.6;
}

@keyframes typing-bounce {

    0%,
    80%,
    100% {
        transform: translateY(0);
        opacity: 0.4;
    }

    40% {
        transform: translateY(-6px);
        opacity: 1;
    }
}

.fab-pulse {
    animation: fab-glow 2s infinite;
}

@keyframes fab-glow {

    0%,
    100% {
        box-shadow: 0 8px 32px rgba(0, 102, 204, 0.4), 0 0 0 0 rgba(0, 212, 255, 0.4);
    }

    50% {
        box-shadow: 0 8px 32px rgba(0, 102, 204, 0.4), 0 0 0 8px rgba(0, 212, 255, 0);
    }
}

/* Vue Transitions */
.fab-enter-active,
.fab-leave-active {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fab-enter-from,
.fab-leave-to {
    opacity: 0;
    transform: scale(0.6) translateY(20px);
}

.chat-window-enter-active,
.chat-window-leave-active {
    transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-origin: bottom right;
}

.chat-window-enter-from,
.chat-window-leave-to {
    opacity: 0;
    transform: scale(0.85) translateY(20px);
}

.message-enter-active {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.message-enter-from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
}

.typing-enter-active,
.typing-leave-active {
    transition: all 0.2s ease;
}

.typing-enter-from,
.typing-leave-to {
    opacity: 0;
    transform: translateY(6px);
}

/* Scrollbar personalizado */
.chat-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
}

.chat-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.chat-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.chat-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}
</style>
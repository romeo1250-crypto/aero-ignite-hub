export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      addresses: {
        Row: {
          address_line1: string | null
          address_line2: string | null
          county: string | null
          created_at: string
          first_name: string | null
          id: string
          is_default: boolean | null
          label: string | null
          last_name: string | null
          notes: string | null
          phone: string | null
          postal_code: string | null
          town: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address_line1?: string | null
          address_line2?: string | null
          county?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          is_default?: boolean | null
          label?: string | null
          last_name?: string | null
          notes?: string | null
          phone?: string | null
          postal_code?: string | null
          town?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address_line1?: string | null
          address_line2?: string | null
          county?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          is_default?: boolean | null
          label?: string | null
          last_name?: string | null
          notes?: string | null
          phone?: string | null
          postal_code?: string | null
          town?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          page_url: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          page_url?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          page_url?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      blogs: {
        Row: {
          author_id: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image: string | null
          id: string
          published: boolean | null
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published?: boolean | null
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          published?: boolean | null
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          created_at: string
          id: string
          product_id: string | null
          quantity: number
          session_id: string | null
          sku_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          product_id?: string | null
          quantity?: number
          session_id?: string | null
          sku_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string | null
          quantity?: number
          session_id?: string | null
          sku_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_items_sku_id_fkey"
            columns: ["sku_id"]
            isOneToOne: false
            referencedRelation: "skus"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image: string | null
          name: string
          parent_id: string | null
          slug: string
          sort_order: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          name: string
          parent_id?: string | null
          slug: string
          sort_order?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          name?: string
          parent_id?: string | null
          slug?: string
          sort_order?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      mpesa_transactions: {
        Row: {
          amount: number
          checkout_request_id: string | null
          created_at: string
          id: string
          merchant_request_id: string | null
          mpesa_receipt_number: string | null
          order_id: string | null
          phone_number: string
          raw_callback: Json | null
          status: string | null
          transaction_date: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          checkout_request_id?: string | null
          created_at?: string
          id?: string
          merchant_request_id?: string | null
          mpesa_receipt_number?: string | null
          order_id?: string | null
          phone_number: string
          raw_callback?: Json | null
          status?: string | null
          transaction_date?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          checkout_request_id?: string | null
          created_at?: string
          id?: string
          merchant_request_id?: string | null
          mpesa_receipt_number?: string | null
          order_id?: string | null
          phone_number?: string
          raw_callback?: Json | null
          status?: string | null
          transaction_date?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mpesa_transactions_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          attributes_snapshot: Json | null
          created_at: string
          discount: number | null
          id: string
          name_snapshot: string | null
          order_id: string
          quantity: number
          sku_id: string
          tax: number | null
          unit_price: number
        }
        Insert: {
          attributes_snapshot?: Json | null
          created_at?: string
          discount?: number | null
          id?: string
          name_snapshot?: string | null
          order_id: string
          quantity: number
          sku_id: string
          tax?: number | null
          unit_price: number
        }
        Update: {
          attributes_snapshot?: Json | null
          created_at?: string
          discount?: number | null
          id?: string
          name_snapshot?: string | null
          order_id?: string
          quantity?: number
          sku_id?: string
          tax?: number | null
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_sku_id_fkey"
            columns: ["sku_id"]
            isOneToOne: false
            referencedRelation: "skus"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          billing_address: Json | null
          created_at: string
          currency: string | null
          discount_total: number | null
          fulfilment_status: string | null
          grand_total: number
          guest_email: string | null
          guest_phone: string | null
          id: string
          notes: string | null
          order_number: string
          paid_at: string | null
          payment_method: string | null
          payment_reference: string | null
          payment_status: string | null
          shipping_address: Json | null
          shipping_total: number | null
          subtotal: number
          tax_total: number | null
          user_id: string | null
        }
        Insert: {
          billing_address?: Json | null
          created_at?: string
          currency?: string | null
          discount_total?: number | null
          fulfilment_status?: string | null
          grand_total: number
          guest_email?: string | null
          guest_phone?: string | null
          id?: string
          notes?: string | null
          order_number: string
          paid_at?: string | null
          payment_method?: string | null
          payment_reference?: string | null
          payment_status?: string | null
          shipping_address?: Json | null
          shipping_total?: number | null
          subtotal: number
          tax_total?: number | null
          user_id?: string | null
        }
        Update: {
          billing_address?: Json | null
          created_at?: string
          currency?: string | null
          discount_total?: number | null
          fulfilment_status?: string | null
          grand_total?: number
          guest_email?: string | null
          guest_phone?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          paid_at?: string | null
          payment_method?: string | null
          payment_reference?: string | null
          payment_status?: string | null
          shipping_address?: Json | null
          shipping_total?: number | null
          subtotal?: number
          tax_total?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          brand: string | null
          category_id: string | null
          compliance: Json | null
          created_at: string
          description: string | null
          featured: boolean | null
          featured_rank: number | null
          id: string
          media: Json | null
          model: string | null
          name: string
          seo: Json | null
          slug: string
          specs: Json | null
          status: string | null
          subtitle: string | null
          updated_at: string
        }
        Insert: {
          brand?: string | null
          category_id?: string | null
          compliance?: Json | null
          created_at?: string
          description?: string | null
          featured?: boolean | null
          featured_rank?: number | null
          id?: string
          media?: Json | null
          model?: string | null
          name: string
          seo?: Json | null
          slug: string
          specs?: Json | null
          status?: string | null
          subtitle?: string | null
          updated_at?: string
        }
        Update: {
          brand?: string | null
          category_id?: string | null
          compliance?: Json | null
          created_at?: string
          description?: string | null
          featured?: boolean | null
          featured_rank?: number | null
          id?: string
          media?: Json | null
          model?: string | null
          name?: string
          seo?: Json | null
          slug?: string
          specs?: Json | null
          status?: string | null
          subtitle?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          kyc: Json | null
          marketing_opt_in: boolean | null
          name: string | null
          phone: string | null
          role: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          kyc?: Json | null
          marketing_opt_in?: boolean | null
          name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          kyc?: Json | null
          marketing_opt_in?: boolean | null
          name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      skus: {
        Row: {
          attributes: Json | null
          barcode: string | null
          compare_at_price: number | null
          created_at: string
          dimensions: Json | null
          id: string
          is_active: boolean | null
          low_stock_threshold: number | null
          preorder: boolean | null
          preorder_eta: string | null
          price_base: number
          product_id: string
          sku_code: string
          stock_qty: number | null
          updated_at: string
          weight: number | null
        }
        Insert: {
          attributes?: Json | null
          barcode?: string | null
          compare_at_price?: number | null
          created_at?: string
          dimensions?: Json | null
          id?: string
          is_active?: boolean | null
          low_stock_threshold?: number | null
          preorder?: boolean | null
          preorder_eta?: string | null
          price_base: number
          product_id: string
          sku_code: string
          stock_qty?: number | null
          updated_at?: string
          weight?: number | null
        }
        Update: {
          attributes?: Json | null
          barcode?: string | null
          compare_at_price?: number | null
          created_at?: string
          dimensions?: Json | null
          id?: string
          is_active?: boolean | null
          low_stock_threshold?: number | null
          preorder?: boolean | null
          preorder_eta?: string | null
          price_base?: number
          product_id?: string
          sku_code?: string
          stock_qty?: number | null
          updated_at?: string
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "skus_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
